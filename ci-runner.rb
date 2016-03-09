# Compares the files that has been changed between this branch and master.
#
# USAGE
#       curl -s https://raw.githubusercontent.com/soldotno/gulp-eslint-style-checker/master/ci-runner.rb | ruby
#
# AUTHOR
#       Martin Stabenfeldt <martin@stabenfeldt.net>
#

ESLINT        = './node_modules/eslint/bin/eslint.js'
STYLE_CHECKER = "#{ESLINT} -c ./node_modules/gulp-eslint-style-checker/eslintrc.json"
GITHUB_REPO   = open('.git/config').grep(/github/).first.match(/.*:(.*).git/)[1]


def remove_missing_files(files)
  return if files.empty?
  existing_files = files.split.select { |file| File.exists?(file) }
  existing_files.join(' ')
end

def style_check_modfied_files
  current_sha = `git rev-parse --verify HEAD`.strip!
  if ENV['CI']
    # The master branch is not available on the build server.
    token = ENV['GITHUB_TOKEN']
    url   = "https://api.github.com/repos/#{GITHUB_REPO}/compare/master...#{current_sha}?access_token=#{token}"
    files = `curl -i #{url} | grep filename | cut -f2 -d: | grep \.js | tr '"', '\ '`
  else
    files = `git diff master #{current_sha} --name-only | grep .js`
  end
  files.tr!("\n", ' ')
  files.gsub!('package.json', '')
  cleaned = remove_missing_files(files)

  if cleaned && cleaned.size >= 1
    system("npm i gulp-eslint-style-checker") unless system("grep gulp-eslint-style-checker package.json")
    system("npm i eslint") unless File.exist?(ESLINT)
    puts "Running #{STYLE_CHECKER} #{cleaned}"
    @report = `#{STYLE_CHECKER} #{cleaned}`
  else
    puts 'No changes made'
  end


  if @report && @report.size > 1
    puts @report
    exit 1
  else
    puts "Well done! All files are according to our style guide! :-) "
  end
end


style_check_modfied_files
