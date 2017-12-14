const fs = require('fs');
const gulp = require('gulp-help')(require('gulp'));
const aws = require('aws-sdk');
const awspublish = require('gulp-awspublish');


/*
	You can set up a AWS S3 bucket to do static website hosting.
	This gulp file contains scripts to help you publish your dist folder to an S3 bucket.
	You will need to set up an AWS profile with credentials that have the right permissions to be able to use these tasks. 

	NOTE: this set up assumes you are using a 3-stage publishing cycle:
		- dev.YOURDOMAIN.com
		- staging.YOURDOMAIN.com
		- YOURDOMAIN.com

	There is a gulp task that publishes to each stage. 
*/

// =====================
//  SET THESE VARIABLES
// =====================

// This should be the name of your bucket.
// If you are using a custom domain, the bucket should match the name of your domain.
const BUCKET = '';

// This should be the name of the AWS profile in your ~/.aws/credentials file.
const AWS_PROFILE = '';


// ===================
//  Create publishers
// ===================

const devPublisher = awspublish.create({
	region: 'ap-southeast-2',
	params: {
		Bucket: `dev.${BUCKET}`
	},
	credentials: new aws.SharedIniFileCredentials({ profile: AWS_PROFILE })
});

const stagingPublisher = awspublish.create({
	region: 'ap-southeast-2',
	params: {
		Bucket: `staging.${BUCKET}`
	},
	credentials: new aws.SharedIniFileCredentials({ profile: AWS_PROFILE })
});

const prodPublisher = awspublish.create({
	region: 'ap-southeast-2',
	params: {
		Bucket: `${BUCKET}`
	},
	credentials: new aws.SharedIniFileCredentials({ profile: AWS_PROFILE })
});


// =====================
//  Gulp task functions
// =====================

const publishDev = function() {
	if (!fs.existsSync('./dist')) {
		console.error('* ERROR: dist folder does not exist.');
	}
	else {
		gulp
			.src('./dist/**')
			.pipe(devPublisher.publish())
			.pipe(devPublisher.sync())
			.pipe(awspublish.reporter())
	}
}

const publishStage = function() {
	if (!fs.existsSync('./dist')) {
		console.error('* ERROR: dist folder does not exist.');
	}
	else {
		gulp
			.src('./dist/**')
			.pipe(stagingPublisher.publish())
			.pipe(stagingPublisher.sync())
			.pipe(awspublish.reporter())
	}
}


const publishProd = function() {
	console.error('IMPORTANT: Make sure your URLS point to production URLS.');
	
	if (!fs.existsSync('./dist')) {
		console.error('* ERROR: dist folder does not exist.');
	}
	else {
		gulp
			.src('./dist/**')
			.pipe(prodPublisher.publish())
			.pipe(prodPublisher.sync())
			.pipe(awspublish.reporter())
	}
}


// ==================
//  Task definitions
// ==================

gulp.task('default', false, [
	'publish:dev'
]);

gulp.task('publish:dev', 'Uploads the dist folder to the development S3 bucket', publishDev);
gulp.task('publish:stage', 'Uploads the dist folder to the staging S3 bucket', publishStage);
gulp.task('publish:prod', 'Uploads the dist folder to the production S3 bucket', publishProd);
