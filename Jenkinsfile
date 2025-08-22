@Library("shared-library") _
pipeline {
    agent { label "sunit" }

    stages {
        stage("Code") {
            steps {
                script {
                    gitClone("https://github.com/sunitkhatua/portfolio.git", "master")
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    dockerBuild("portfolio", "latest", "sunitkhatua")
                }
            }
        }

        stage("Test") {
            steps {
                echo "This is testing stage"
                // Add test commands here (e.g. npm test, pytest, etc.)
            }
        }

        stage("Push") {
            steps {
                script {
                    dockerPush("portfolio", "latest", "sunitkhatua")
                }
            }
        }

        stage("Deploy") {
            steps {
                echo "This is deploy stage"
                sh "docker compose up -d || docker-compose up -d"
                echo "Deployed Successfully"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
        failure {
            echo "Pipeline failed ❌"
        }
        success {
            echo "Pipeline executed successfully ✅"
        }
    }
}
