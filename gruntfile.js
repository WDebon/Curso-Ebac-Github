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
            less: { //Watching o Less
                files:['src/styles/**/*'], //"**" = pastas || "*" = arquivo
                tasks:['less:development']
            },
            html:{ //Watchign o HTML sendo trocado
                files:['src/index.html'],
                tasks:['replace:dev']
            }
        },

        replace:{
            dev:{ //Trocando o .js e .css do HTML para o .js e .css normal "main" criado
                options:{
                    patterns:[
                        {
                            match: 'css_Dest', //usar @@ no links em vez do path
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'js_Dest', //usar @@ no script em vez do path
                            replacement: '../src/scripts/main.js'
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
            },
            dist:{ //Trocando o .css do HTML-minimizado para o .css-minimizado
                options:{
                    patterns:[
                        {
                            match: 'css_Dest',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'js_Dest', //usar @@ no script em vez do path
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files:[ //colocando o html-minimizado no dist
                    {
                        expand: true,
                        flatten:true,
                        src:['./prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }
        },

        htmlmin:{ //Minimizando o html
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true,
                },
                files:{ //Criando o arquivo prebuild temporariamente para armazenizar o hml minimizado
                    './prebuild/index.html':'./src/index.html'
                }
            }
        },

        uglify:{
            target:{
                files:{
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                },
            }
        },

        clean:['prebuild'] //deletando o prebuild

    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist','clean','uglify'])
}