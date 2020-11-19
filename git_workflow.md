# Git work flow

- Project repository for the new website is present here https://github.com/itistheshortcut/new-shortcut-website.

- Clone the project on your dev machine:

  `git clone git@github.com:itistheshortcut/new-shortcut-website.git`.

- Navigate to the project directory:

  `cd new-shortcut-website/`

- We develop new features from `development` branch and make pull requests to `development` branch.

- Check which branch you are in by using `git branch`. Make sure you are in the `development` branch. To go to the development branch:

  `git checkout development`.

- To develop a new feature create a new branch for example :

  `git checkout -b feature/new_branch_name`

  If you are solving bug fixes, create a new branch:

  `git checkout -b bugfix/new_branch_name`

- After you have made changes commit the changes first to your local repository:

  `git commit`

- To push changes to remote feature branch:

  `git push origin feature/new_branch_name`

- Using git hub create a Pull request to development branch and add reviewers.

- When your pull request gets accepted merge the pull request using github.
