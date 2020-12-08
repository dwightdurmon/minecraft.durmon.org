pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Check out code'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building'
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