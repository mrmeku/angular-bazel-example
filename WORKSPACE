workspace(name = "angular_bazel_example")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.3.1",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "npm_install")
node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/mrmeku/rules_typescript.git",
    commit = "ad92d2f62edb962c82ff1b5588158c82b1e431f2",
)

load("@build_bazel_rules_typescript//:setup.bzl", "ts_setup_workspace")

ts_setup_workspace()

local_repository(
    name = "angular",
    path = "../angular/packages/bazel",
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.3",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()

git_repository(
    name = "com_github_bazelbuild_buildtools",
    remote = "https://github.com/bazelbuild/buildtools.git",
    # Note, this commit matches the version of buildifier in angular/ngcontainer
    commit = "b3b620e8bcff18ed3378cd3f35ebeb7016d71f71",
)

http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.8.1/rules_go-0.8.1.tar.gz",
    sha256 = "90bb270d0a92ed5c83558b2797346917c46547f6f7103e648941ecdb6b9d0e72",
)


load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

npm_install(
    name = "angular_bazel_example_prod_deps",
    package_json = "//:package.prodserver.json",
)

git_repository(
    name = "io_bazel_rules_closure",
    remote = "https://github.com/mrmeku/rules_closure.git",
    commit = "294f8129a76bc6cff2af1b5421c41699fd35a61b",
)

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

closure_repositories()
