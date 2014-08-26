# Most of this is from Mig Reyes' "Hazelnut" Rakefile
#https://github.com/migreyes/hazelnut

url_live    = "website.com"

deploy_user = "user@website.com"
deploy_path = "public_html/directory"

desc "Delete old website files to start fresh."
task :clean do
  puts "Starting fresh!"
  system "rm -rf _site"
end

# Defalut task 
desc "Design, write, and edit live."
task :default => [:clean] do
  pids = [
    spawn("jekyll serve -w --baseurl '' "),
    spawn("sass --watch _sass/style.scss:css/style-min.css --style compressed")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

desc "Fire up Jekyll and watch for changes"
	task :jekyll do
		system "jekyll serve -w --baseurl '' "
	end

desc "build _site directory"
	task :build do
		system "jekyll build"
	end

desc "Have Sass watch for changes and compile"
	task :sass do
		system "sass --watch _sass/style.scss:css/style.css --style expanded"
	end

desc "Compile minified css with Sass"
	task :sass_prod do
		system "sass --update _sass/style.scss:css/style-min.css --style compressed"
	end

desc "Upload site to live server"
task :deploy do
  puts "Deploying at http://#{url_live}!"
  system "rsync -avze 'ssh -p 22' _site/ #{deploy_user}:#{deploy_path}"
end