const { file, option } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        ,
        //Compilando LESS
        less: {development:{files:{'./build/styles/main.css':'./src/styles/main.less'}}}
        ,
        //Trocando os @@ do HTML e colocando ele na ./build
        replace:{ 
            dev:{
                options:{patterns:[{match: 'css',replacement: './styles/main.css'},{match: 'js',replacement: './scripts/main.js'}]}
                ,
                files: [{expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'}]
            }
        } 
        ,
        //Comprimindo o .js
        uglify:{target:{files:{'./build/scripts/main.js': './src/scripts/main.js'},}}
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');


    grunt.registerTask('default', ['less','uglify','replace'])
}