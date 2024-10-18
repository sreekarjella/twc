pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/node'
        PATH = "${NODE_HOME}:$PATH"
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'git@github.com:sreekarjella/twc.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh 'docker cp build/. twc:/usr/share/nginx/html'
            }
        }
    }
}
