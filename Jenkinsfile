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
                sh 'YARN_CACHE_FOLDER=./cache yarn install'
                sh 'YARN_CACHE_FOLDER=./cache yarn build'
                stash includes: 'build/*', name: 'build'
                deleteDir()
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                deleteDir()
                unstash 'build'
                sh "ls -la"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}