module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    './build/styles/mainLess.css':'./src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    './build/styles/mainLess.css':'./src/styles/main.less'
                }
            }
        },
        sass:{
            dist:{
                options:{
                    style:'compressed'
                },
                files:{
                    './build/styles/mainSass.css':'./src/styles/main.scss'
                }
            }
        },
        concurrent:{target:['slowTest','less','sass']}
    })

    grunt.registerTask('slowTest', function(){ //npm run slowTest
        const done = this.async();
        setTimeout(function(){
            console.log("Olá grunt");
            done();
        },3000)
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent'])
}