const exec = require('child_process').exec;

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch: {
			store: {
				files: ['./store/src/**/*.js', './webpack.config.js'],
				tasks: ['build']
			}
		}
	});

	grunt.registerTask('build', function() {
		var done = this.async();
		// console.log(process.cwd());
		exec('npm run build-store', function(err, stdout, stderr) {
			if(err) {
				grunt.log.writeln(stdout)
				done(err)
			}
			else if (stderr) {
				grunt.log.writeln(stdout);
				grunt.log.writeln(stderr);
				done(new Error('Error in building...'));
			}
			else {
				grunt.log.writeln(stdout);
				done();
			}
		})
	});


	grunt.registerTask('default', 'watch')
}