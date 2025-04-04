Thank you for your interest in contributing to this project! 

This project follows the Git Flow workflow. Please use the guidelines below to ensure smooth collaboration and effective contributions.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Forking the Repository](#forking-the-repository)
   - [Cloning Your Fork](#cloning-your-fork)
   - [Setting Up Remotes](#setting-up-remotes)
1. [Branching Strategy](#branching-strategy)
   - [Feature Branches](#feature-branches)
   - [Bug Fixes](#bug-fixes)
   - [Chores](#chores)
   - [Hotfixes](#hotfixes)
1. [Making Changes](#making-changes)
   - [Coding Standards](#coding-standards)
   - [Commit Messages](#commit-messages)
1. [Keeping Your Fork Updated](#keeping-your-fork-updated)
1. [Submitting Your Changes](#submitting-your-changes)
   - [Pull Requests](#pull-requests)
1. [Review Process](#review-process)
1. [Attribution](#attribution)

## Getting Started

### Forking the Repository

Begin by forking the main repository to your GitHub account. This creates a personal copy where you can make changes without affecting the original project.

### Cloning Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/your-username/highlightjs-iecst.git
```

Navigate to the project directory:

```bash
cd highlightjs-iecst
```

### Setting Up Remotes

Configure the original repository as the upstream remote:

```bash
git remote add upstream https://github.com/fisothemes/highlightjs-iecst.git
```

Verify your remotes:

```bash
git remote -v
```

You should see:

```
origin    https://github.com/your-username/highlightjs-iecst.git (fetch)
origin    https://github.com/your-username/highlightjs-iecst.git (push)
upstream  https://github.com/fisothemes/highlightjs-iecst.git (fetch)
upstream  https://github.com/fisothemes/highlightjs-iecst.git (push)
```

## Branching Strategy

We follow the Git Flow workflow with specific branch naming conventions.

### Feature Branches

For new features, create a branch from `develop` with the prefix `feature/`:

```bash
git checkout develop
git pull upstream develop
git checkout -b feature/brief-description
```

### Bug Fixes

For bug fixes, use the prefix `fix/`:

```bash
git checkout develop
git pull upstream develop
git checkout -b fix/brief-description
```

### Chores

For maintenance tasks, use the prefix `chore/`:

```bash
git checkout develop
git pull upstream develop
git checkout -b chore/brief-description
```

### Hotfixes

For critical fixes that need to go directly into `master`, use the prefix `hotfix/`:

```bash
git checkout master
git pull upstream master
git checkout -b hotfix/brief-description
```

## Making Changes

### Coding Standards

Ensure your code adheres to our [coding standards](). Consistency helps maintain code quality and readability.

### Commit Messages

Write clear and descriptive commit messages:

- **Structure**: Separate the subject from the body with a blank line.
- **Subject Line**:
  - Limit to 50 characters.
  - Capitalize the first letter.
  - Use the imperative mood (e.g., "Add feature" not "Added feature").
- **Body**:
  - Wrap at 72 characters.
  - Explain the *why*, not the *what*.

For detailed guidance, refer to [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

## Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
git checkout develop
git fetch upstream
git merge upstream/develop
git push origin develop
```

For `master`:

```bash
git checkout master
git fetch upstream
git merge upstream/master
git push origin master
```

## Submitting Your Changes

### Pull Requests

Once your changes are ready:

1. Push your branch to your fork:

   ```bash
   git push origin branch-name
   ```

2. Navigate to the original repository on GitHub.

3. Click **"Compare & pull request"**.

4. Provide a clear title and description.

5. Submit the pull request to the `develop` branch.


## Review Process

Your pull request will be reviewed and suggests for changes maybe made. Engage in the discussion and update your code as needed. Once approved, your changes will be merged.

## Attribution

This guide is based on best practices from various open-source projects, including the [CONTRIBUTING.md Example & Template](https://contributing.md/example/).