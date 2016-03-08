# Compares the files that has been changed between this branch and master.
#
# USAGE
#       curl https://raw.githubusercontent.com/soldotno/gulp-eslint-style-checker/master/ci-runner.rb | ruby
#
# AUTHOR
#       Martin Stabenfeldt <martin@stabenfeldt.net>
#

STYLE_CHECKER = './node_modules/gulp-eslint-style-checker/node_modules/.bin/eslint -c ./node_modules/gulp-eslint-style-checker/eslintrc.json'
GITHUB_REPO = open('.git/config').grep(/github/).first.match(/.*:(.*).git/)[1]

raise "ENV['GITHUB_TOKEN'] not set" unless ENV['GITHUB_TOKEN']

def remove_missing_files(files)
  return if files.empty?
  existing_files = files.split.select { |file| File.exists?(file) }
  existing_files.join(' ') if existing_files.size > 1
end

def style_check_modfied_files
  current_sha = `git rev-parse --verify HEAD`.strip!
  if ENV['CI']
    # The master branch is not available on the build server.
    url   = "https://api.github.com/repos/#{GITHUB_REPO}/compare/master...#{current_sha}?access_token=#{ENV['GITHUB_TOKEN']}"
    files = `curl -i #{url} | grep filename | cut -f2 -d: | grep \.js | tr '"', '\ '`
  else
    files = `git diff master #{current_sha} --name-only | grep .js`
  end
  files.tr!("\n", ' ')
  files = remove_missing_files(files)

  if files.size > 1
    puts "\n\nInspecting #{files}"
    system("npm install gulp-eslint-style-checker") unless system("grep gulp-eslint-style-checker package.json /dev/null 2>&1")
  else
    puts 'No changes made'
  end

  @report = `#{STYLE_CHECKER} #{files}` if files.size > 1

  if @report && @report.size > 1
    puts @report
    exit 1
  else
    puts "Well done! All files are according to our style guide! :-) "
  end
end


style_check_modfied_files
