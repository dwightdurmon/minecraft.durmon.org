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
        withCredentials([sshUserPrivateKey(credentialsId: 'DurmonMinecraft', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
            remote.user = userName
            remote.identityFile = identity
            stage("Deploy") {
                // writeFile file: 'abc.sh', text: 'ls'
                sshCommand remote: remote, command: 'pwd; ls -la'
                //sshPut remote: remote, from: 'abc.sh', into: '.'
                //sshGet remote: remote, from: 'abc.sh', into: 'bac.sh', override: true
                //sshScript remote: remote, script: 'abc.sh'
                //sshRemove remote: remote, path: 'abc.sh'
            }
        }
    }
}