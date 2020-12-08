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
                sh 'mkdir cache'
                sh 'mkdir global'            
                sh 'yarn --cache-folder ./cache --global-folder ./global install'
                sh 'yarn --cache-folder ./cache --global-folder ./global build'
                stash includes: 'build/**', name: 'build'
            }
        }
        stage('Delete Old Site') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'DurmonMinecraft', keyFileVariable: 'keyfile', passphraseVariable: '', usernameVariable: 'SSH_USERNAME')]) {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        sh 'ssh -i ${keyfile} -o StrictHostKeyChecking=no ${SSH_USERNAME}@durmon.org "cd ../../web; rm -rf *"'
                    }
                }
            }
        }
        stage('Deploy New Site') {
            steps {
                unstash 'build'
                sh 'ls -la'
                withCredentials([sshUserPrivateKey(credentialsId: 'DurmonMinecraft', keyFileVariable: 'keyfile', passphraseVariable: '', usernameVariable: 'SSH_USERNAME')]) {
                    sh 'scp -r -p -i ${keyfile} -o StrictHostKeyChecking=no build/* ${SSH_USERNAME}@durmon.org:../../web'
                }
            }
        }
    }
}