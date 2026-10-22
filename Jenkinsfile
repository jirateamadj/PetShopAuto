pipeline {
    agent any
    stages {
        stage('Pruebas Paralelas') {
            parallel {
                stage('Chrome') {
                    steps {
                        bat 'npx playwright test --project=chromium'
                    }
                }
                stage('Firefox') {
                    steps {
                        bat 'npx playwright test --project=firefox'
                    }
                }
            }
        }
    }
}