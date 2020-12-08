pipeline {
    agent {
        docker { image 'node:15-alpine' }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh 'yarn install'
                sh 'yarn build'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}