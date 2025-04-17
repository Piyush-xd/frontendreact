pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning GitHub repo...'
                // Repo is cloned automatically by Jenkins when using SCM
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build React App') {
    steps {
        echo 'Building the React app...'
        sh 'CI=false npm run build'
    }
}

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jewellery-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh 'docker run -d -p 3000:80 --name jewellery-container jewellery-app || true'
            }
        }
    }
}
