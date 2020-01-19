# Global Mechanic Website

The global mechanic website is served by an obsolete [feathersjs](https://feathersjs.com/) app which in turn connects to a larger but equally obsolete [feathersjs](https://feathersjs.com/) [CMS](https://en.wikipedia.org/wiki/Content_management_system) called `Gears`.

Data flow works thusly:

- Media and Metadata about completed Global Mechanic products is inputted into `Gears` along with information about how this data should be shown on the website.

- The `Website Server` connects to gears, downloads and sanitizes information that's intended to be displayed client-side, making copies of relevent files and uploading them to [S3](https://aws.amazon.com/s3/).

- The `Website Client` connects to the `Website Server`, downloads aforementioned data and formats it nicely with [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) and [React Router](https://reacttraining.com/react-router/web/guides/quick-start) 

As of this writing in the *refactor-2020* branch, the goal is to update the client side of the site with an artistic rebrand, using the data from the obsolete api as best as possible.

# Getting Started

- `npm i` 
- create a **development.json** configuration file in the *./config* directory. Details about the **development.json** file are listed [below](#Development.JSON).
- start 3 terminal processes, one for each:
    - `npm run db:dev` Starts a MongoDB process for the website to use. `mongod` does not need to be installed on your system, the version the website uses is obsolete and has been included in this repo.
    - `npm run serve:dev` Starts a `Website Server` process which fetches data from `Gears` and populates the database with it.
    - `npm run webpack:dev` Starts a `webpack-dev-server` which serves the client, which will be visible at [http://localhost:5500]()

## `development.json`
[feathersjs](https://feathersjs.com/) use(s/d) a slightly modified version of [node-config](https://www.npmjs.com/package/config). In order to allow the development `Website Server` to connect to `Gears`, a `development.json` must be created in the config folder with credentials to `Gears`:

*./config/development.json*
```json
{
    "gears": {
        "auth": {
            "email": "*redacted*",
            "password": "*redacted*"
        },
        "host": "http://gears.globalmechanic.com"
    }
}
```

Contact ben@globalmechanic.com to retreive auth credentials.

# `./src/client` folder

The client folder is the main focus for the `rebrand-2020` branch. While the entire repo has been upgraded to use [TypeScript](https://www.typescriptlang.org/), only the client folder restarted-from-scratch, and consists of mostly boiler plate.

