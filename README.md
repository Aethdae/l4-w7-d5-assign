# Deployed Full-stack App

Add and view users on a table

Live Site: https://d4vebcbtnubcr.cloudfront.net

## Frontend construction

Frontend directory:

- `npm run build` to build for distribution
- Created an S3 Bucket on AWS
- Uploaded /dist to S3 Bucket
- Created a Cloudfront distribution
- Set Origin on Cloudfront to the S3 Bucket
- Updated origins for CORS to new url
