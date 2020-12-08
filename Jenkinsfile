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
                sh 'mkdir cache'
                sh 'mkdir global'            
                sh 'yarn --cache-folder ./cache --global-folder ./global install'
                sh 'yarn --cache-folder ./cache --global-folder ./global build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'

                withCredentials([sshUserPrivateKey(credentialsId: 'DurmonMinecraft', keyFileVariable: 'keyfile', passphraseVariable: '', usernameVariable: 'SSH_USERNAME')]) {
                    sh 'ssh -i ${keyfile} -o StrictHostKeyChecking=no ${SSH_USERNAME}@durmon.org "cd ../../web; rm -rf *"'
                    sh 'scp -r -i ${keyfile} -o StrictHostKeyChecking=no build/* ${SSH_USERNAME}@durmon.org:../../web'
                    sh 'scp -r -i ${keyfile} -o StrictHostKeyChecking=no static/* ${SSH_USERNAME}@durmon.org:../../web'                  
                }
            }
        }
    }
}