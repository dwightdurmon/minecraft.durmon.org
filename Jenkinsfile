pipeline {
    agent none

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                docker.image('buildpack-deps:jessie-scm').inside {
                    sh 'yarn install'
                    sh 'yarn build'
                    stash includes: 'build/*', name: 'build'
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