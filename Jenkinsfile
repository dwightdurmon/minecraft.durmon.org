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
                sh 'yarn install'
                sh 'yarn build'
                stash includes: 'build/*', name: 'build'
                
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