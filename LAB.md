# Lab 12 — Job Containers in GitHub Actions

## Goal

Run your CI job **inside a Docker container** instead of directly on the GitHub runner.

You will configure a workflow that executes `npm test` inside a `node:18` container image, giving you full control over the Node.js version regardless of what the runner has installed.

---

## Estimated time

25 minutes

---

## Background

By default, GitHub Actions runs your steps on a shared runner machine (e.g., `ubuntu-latest`). That machine has software pre-installed, but you cannot fully control which versions.

Adding a `container:` block to your job tells GitHub Actions to:

1. Pull a Docker image
2. Start a container from that image
3. Run **all steps** inside that container

Your runner becomes just a host — the real execution happens inside the container.

---

## Starter project

The repo contains a small Node.js calculator library:

```
src/
  calculator.js       # add, subtract, multiply
  calculator.test.js  # tests using node:test
package.json          # "test": "node --test"
```

Run locally (if you have Node 18+):

```bash
npm test
```

Tests should pass before you start.

---

## Your task

Create a GitHub Actions workflow at `.github/workflows/ci.yml` that:

1. Triggers on every `push` to the `main` branch
2. Runs the job inside a `node:18` Docker container
3. Checks out the code
4. Installs dependencies with `npm install`
5. Runs tests with `npm test`

---

## Acceptance criteria

- [ ] Workflow file exists at `.github/workflows/ci.yml`
- [ ] Workflow triggers on `push` to `main`
- [ ] Job declares `runs-on: ubuntu-latest` **and** `container: image: node:18`
- [ ] Steps: `actions/checkout@v4` → `npm install` → `npm test`
- [ ] Workflow run is green on GitHub Actions

---

## Hints

<details>
<summary>Hint 1 — Where does <code>container:</code> go?</summary>

`container:` is a job-level key — it lives inside `jobs.<job-name>`, not inside `steps:`. Think of it as describing the environment the whole job runs in.

</details>

<details>
<summary>Hint 2 — Do I still need <code>runs-on</code>?</summary>

Yes. `runs-on` selects the GitHub-managed host machine that will spin up your container. The container runs *on top of* that runner. Both keys are required.

</details>

<details>
<summary>Hint 3 — What if I skip <code>container:</code>?</summary>

The job runs directly on the runner. `ubuntu-latest` ships with multiple Node versions but not always the one you want. With `container: image: node:18` you get exactly Node 18 — nothing else, nothing more.

</details>

---

## Done?

Push your workflow to `main` and confirm a green run in the **Actions** tab on GitHub.
