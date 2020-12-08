pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    stages {
        stage('Build') {
            agent {
                docker { image 'node:15-alpine' }
            }
            steps {
                echo 'Building'              
                sh 'yarn --cache-folder ./cache --global-folder ./global install'
                sh 'yarn --cache-folder ./cache --global-folder ./global build'
                stash includes: 'build/*', name: 'build'
            }
        }
        stage('Show Output') {
            steps {
                echo 'Testing..'
                deleteDir()
                unstash 'build'
                sh "ls -la build"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}