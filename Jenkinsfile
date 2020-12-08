pipeline {
    agent none

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                node {
                    docker.image('node:15-alpine').inside {
                        sh 'yarn install'
                        sh 'yarn build'
                        stash includes: 'build/*', name: 'build'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
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