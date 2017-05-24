require './app'
require 'jasmine'
require 'jshintrb/jshinttask'

load 'jasmine/tasks/jasmine.rake'

desc 'js validation'
Jshintrb::JshintTask.new :jshint do |task|
  task.pattern = 'assets/javascripts/*.js'
  task.options = Jshintrb::Lint::DEFAULTS.merge({:predef => ['jQuery']})
end

task :default=>[:jshint, :'jasmine:ci']

