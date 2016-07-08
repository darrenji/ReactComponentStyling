webpack不见可以编译js,还可以编译css.配置文件有默认的惯例，一般是webpack.config.dev.js或webpack.config.js,前者用来开发。webpack的配置文件本身也是一个module，通常基本配置如下：

	module.exports = {
		entry: ['./filenames.js'],
		output: {
			path: '/a-directory',
			filename: 'my-bundle.js',
			publicPath: '/app-path'
		},
		module: {
			loaders: [{
				test: /file-regex/,
				loaders: ['transformers...']
			}]
		}
	}

- entry:入口文件
- output:文件输出，path目录，filename是输出文件的名称，publicPath引用my-bundle.js文件的路径
- module.loaders可以放多个module

<br>

> npm install style-loader --save-dev

<br>

把css输出到页面上。

<br>

> npm install css-loader cssnext-loader --save-dev

<br>

> webpack.confgi.dev.js

<br>

	var path = require('path')
	var webpack = require('webpack')
	
	module.exports = {
	  devtool: 'eval',
	  entry: [
	    'webpack-hot-middleware/client',
	    './src/index'
	  ],
	  output: {
	    path: path.join(__dirname, 'dist'),
	    filename: 'bundle.js',
	    publicPath: '/static/'
	  },
	  plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	  ],
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src')
	    }, {
	      test: /\.jpg/, 
	      loader: 'file'
	    },{
	        test: /\.css/,
	        loaders: ['style', 'css', 'cssnext']
	    }]
	  }
	}

<br>

> ctrl + c

<br>

> npm start

<br>






