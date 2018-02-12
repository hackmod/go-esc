// Copyright 2017 The go-esc Authors
// This file is part of the go-esc library.
//
// The go-esc library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The go-esc library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the go-esc library. If not, see <http://www.gnu.org/licenses/>.

const path = require('path');

module.exports = {
    entry:  './index.jsx',
    output: {
        path:     path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/, // regexp for JSX files
                loader: 'babel-loader', // The babel configuration is in the package.json.
                query: {
                    presets: ['env', 'react', 'stage-0']
                }
            },
        ],
    },
};
