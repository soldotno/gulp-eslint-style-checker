# Compares the files that has been changed between this branch and master.
#
# USAGE
#       curl -s https://raw.githubusercontent.com/soldotno/gulp-eslint-style-checker/master/ci-runner.rb | ruby
#
# AUTHOR
#       Martin Stabenfeldt <martin@stabenfeldt.net>
#

ESLINT        = './node_modules/eslint/bin/eslint.js'
ESLINT_CONFIG = 'eslintrc.json-ci-runner'
CONFIG_URL    =  'https://raw.githubusercontent.com/soldotno/gulp-eslint-style-checker/master/eslintrc.json'
STYLE_CHECKER = "#{ESLINT} -c #{ESLINT_CONFIG}"
GIT_CONFIG    = '.git/config'

raise "We need #{GIT_CONFIG}" unless File.exist?(GIT_CONFIG)
GITHUB_REPO   = open(GIT_CONFIG).grep(/github/).first.match(/.*:(.*).git/)[1]

raise "You forgot to set ENV['GITHUB_TOKEN']" unless ENV['GITHUB_TOKEN']

def style_check_modfied_files
  files = modified_files
  if files
    download_config
    puts 'Installing eslint..'
    system('npm install -g babel babel-eslint eslint@2.7.0 eslint-plugin-jsx-a11y@latest eslint-plugin-react@4.3.0 eslint-config-airbnb gulp-eslint minimist')
    puts "\n\n Running #{STYLE_CHECKER} #{files} \n\n"
    @report = `#{STYLE_CHECKER} #{files}`
  else
    puts 'No changes made'
  end

  if @report && @report.size > 1
    puts @report
    exit 1
  else
    puts "Well done! All modified_files are according to our style guide! :-) "
  end
end


def remove_missing_files(files)
  return if files.empty?
  existing_files = files.split.select { |file| File.exists?(file) }
  existing_files.join(' ')
end

def download_config
  puts "download config.."
  require 'open-uri'
  File.open(ESLINT_CONFIG, "wb") do |eslint_config|
    open(CONFIG_URL, "rb") do |downloaded_eslint|
      eslint_config.write(downloaded_eslint.read)
    end
  end
end


def modified_files
  current_sha = `git rev-parse --verify HEAD`.strip!
  if ENV['CI']
    # The master branch is not available on the build server.
    url   = "https://api.github.com/repos/#{GITHUB_REPO}/compare/master...#{current_sha}?access_token=#{ENV['GITHUB_TOKEN']}"
    files = `curl -i #{url} | grep filename | cut -f2 -d: | grep .js | grep -v .json | tr '"', '\ '`
  else
    files = `git diff master #{current_sha} --name-only | grep .js | grep -v .json`
  end
  files.tr!("\n", ' ')
  files.size >= 1 ? remove_missing_files(files) : false
end



style_check_modfied_files
