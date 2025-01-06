const { file, option } = require("grunt");
const { watch, src, dest } = require("gulp");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    './dev/styles/main.css':'./src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    './dist/styles/main.min.css':'./src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files:['src/styles/**/*'], //"**" = pastas || "*" = arquivo
                tasks:['less:development']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'css_Dest',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten:true,
                        src:['./src/index.html'],
                        dest:'dev/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true,
                },
                files:{
                    './prebuild/index.html':'./src/index.html'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production'])
}