pipeline {
    agent { label 'windows-agent' }
    stages {
        stage('Clean & SUT') {
            steps {
                cleanWs()
                dir('C:\\D\\Projects\\SES\\Python\\PetShop') {
                    bat 'start /B .venv\\Scripts\\python -m uvicorn app.main:app --port 8000'
                    bat 'ping 127.0.0.1 -n 6 > nul'
                }
            }
        }
        stage('Setup Tests') {
            steps {
                dir('PetShopAuto') {
                    bat 'git clone https://github.com/jirateamadj/PetShopAuto.git .'
                    bat 'npm install'
                }
            }
        }
        stage('Pruebas Paralelas') {
            parallel {
                stage('API Tests') {
                    steps {
                        dir('PetShopAuto') {
                            bat 'npx playwright test --project=apiProject'
                        }
                    }
                }
                stage('UI Tests') {
                    steps {
                        dir('PetShopAuto') {
                            bat 'npx playwright test --project=chromeProject'
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'PetShopAuto/playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
            bat 'for /f "tokens=5" %%a in (\'netstat -a -n -o ^| findstr :8000 ^| findstr LISTENING\') do taskkill /F /PID %%a'
        }
    }
}