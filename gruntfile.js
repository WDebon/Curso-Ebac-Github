const { file, option } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Os tasks a seguir poderiam ter qualquer outro nome dentro que n mudaria nada (Trocar "Files" por "f" = mesmo resultado)
        less: {
            development:{
                files:{
                    './build/styles/main.css':'./src/styles/main.less'
                }
            }
        },

        replace:{
            dev:{
                options:{
                    patterns:[
                        {match: 'css',replacement: './styles/main.css'},
                        {match: 'js',replacement: './scripts/main.js'}
                    ]
                },
                files: [{expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'}]
            }
        },

        uglify:{
            target:{
                files:{
                    './build/scripts/main.js': './src/scripts/main.js'
                },
            }
        },

        clean:['prebuild']

    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less','uglify','replace'])
}