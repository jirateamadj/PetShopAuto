pipeline {
    agent any
    stages {
        stage('Pruebas Paralelas') {
            parallel {
                stage('API Tests') {
                    steps {
                        bat 'npx playwright test --project=apiProject'
                    }
                }
                stage('UI Tests') {
                    steps {
                        bat 'npx playwright test --project=chromeProject'
                    }
                }
            }
        }
    }
}