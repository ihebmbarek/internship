pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: buildah
      image: quay.io/buildah/stable:v1.35.4
      command:
        - cat
      tty: true
"""
        }
    }

    environment {
        PROJECT_NAME       = "beta"
        OPENSHIFT_SERVER   = "https://api.ocp.smartek.ae:6443"
        REGISTRY_CREDENTIALS = 'quay-credentials-iheb'   // <-- create this in Jenkins
        FRONTEND_IMAGE     = "quay.io/ihebmbarek/jobportal-frontend:latest"
        BACKEND_IMAGE      = "quay.io/ihebmbarek/jobportal-backend:latest"
    }

    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push to Quay (Buildah)') {
            parallel {
                stage('Frontend') {
                    steps {
                        container('buildah') {
                            withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS,
                                                              usernameVariable: 'QUAY_USER',
                                                              passwordVariable: 'QUAY_PASS')]) {
                                sh '''
                                    buildah login -u "$QUAY_USER" -p "$QUAY_PASS" quay.io
                                    cd frontend
                                    buildah bud --storage-driver=vfs -t $FRONTEND_IMAGE .
                                    buildah push --storage-driver=vfs $FRONTEND_IMAGE
                                '''
                            }
                        }
                    }
                }

                stage('Backend') {
                    steps {
                        container('buildah') {
                            withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS,
                                                              usernameVariable: 'QUAY_USER',
                                                              passwordVariable: 'QUAY_PASS')]) {
                                sh '''
                                    buildah login -u "$QUAY_USER" -p "$QUAY_PASS" quay.io
                                    cd backend
                                    buildah bud --storage-driver=vfs -t $BACKEND_IMAGE .
                                    buildah push --storage-driver=vfs $BACKEND_IMAGE
                                '''
                            }
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo " Pipeline completed successfully! Images pushed to Quay (ihebmbarek)."
        }
        failure {
            echo " Pipeline failed! Please check the logs."
        }
    }
}
