node('master') {
    stage('Checkout') {
        echo 'Getting source code'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i'
    }

    stage("PR Builder Console") {
        sh "echo START"
        sh "echo git branch"
        sh "echo ${env.GIT_BRANCH}"
        sh "echo pull description"
        sh "echo ${env.ghprbPullDescription}"
        sh "echo pull id"
        sh "echo ${env.ghprbPullId}"
        sh "echo pull link"
        sh "echo ${env.ghprbPullLink}"
        sh "echo pull title"
        sh "echo ${env.ghprbPullTitle}"
        sh "echo src branch"
        sh "echo ${env.ghprbSourceBranch}"
        sh "echo target branch"
        sh "echo ${env.ghprbTargetBranch}"
        sh "echo comment body"
        sh "echo ${env.ghprbCommentBody}"
        sh "echo END"
    }

    stage('Test') {
        echo 'Testing'
        sh 'npm test'
    }

    stage('Pack Application') {
        echo 'Packing application'
        sh 'npm pack'
    }

    stage('Run web api playbook') {
        echo 'web apis playbook'
        // sh 'ansible-playbook /var/lib/jenkins/jobs/jenkins-pipeline/workspace/webapi-playbook.yml'
    }
}
