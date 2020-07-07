// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      database: "hungrilydb",
      user: "hungrilyapp",
      password: "12345",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      database: "hungrilydb",
      user: "hungrilyapp",
      password: "12345",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: "ec2-54-161-208-31.compute-1.amazonaws.com",
      port: 5432,
      database: "dbie3ojbmo09t",
      user: "ryekbfmigiahay",
      password:
        "09b2273f4ab003770f2fcf323279e62b106c1de5bfadd27a219ee49c597d718b",
    },
  },
};
