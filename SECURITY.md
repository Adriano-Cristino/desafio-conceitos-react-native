# Security Policy

## Supported Versions

Security updates are provided for the current version of this React Native application.

## Security Configuration

This application implements several security measures:

### Network Security

#### iOS App Transport Security (ATS)
- ATS is enabled with restricted settings
- Only localhost is allowed for insecure HTTP connections (development only)
- TLS 1.0 minimum for localhost exceptions

#### Android Network Security
- Cleartext traffic is disabled in production builds
- HTTP traffic only allowed in debug builds for development

### Development Security

#### ESLint Security Rules
- `eslint-plugin-security` is configured to detect common security issues
- Rules include detection of:
  - Unsafe regex patterns
  - Object injection vulnerabilities
  - Eval usage
  - Non-literal require() calls
  - Potential timing attacks

#### Dependency Management
- Regular security audits using `yarn audit`
- Dependencies are kept updated to patch known vulnerabilities
- Critical and high-severity vulnerabilities are prioritized for fixes

### File Security

#### Sensitive File Protection
- Security-sensitive files are excluded via .gitignore:
  - Environment files (.env*)
  - Certificate files (*.p12, *.jks, *.p8)
  - API keys and secrets
  - iOS provisioning profiles
  - Android signing keys

## Reporting a Vulnerability

If you discover a security vulnerability in this application:

1. **Do not** create a public issue
2. Contact the repository maintainers privately
3. Provide a detailed description of the vulnerability
4. Include steps to reproduce if applicable

## Security Best Practices for Contributors

### API Security
- Always use HTTPS in production
- Never commit API keys or secrets
- Use environment variables for sensitive configuration

### Mobile Security
- Test on both iOS and Android platforms
- Validate network security configurations
- Ensure proper data storage practices

### Development Security
- Run `yarn audit` before committing changes
- Address security linting warnings
- Keep dependencies updated

## Security Checklist

Before production deployment:

- [ ] All dependencies are up to date
- [ ] Security audit shows no critical vulnerabilities
- [ ] ATS is properly configured for iOS
- [ ] Android network security config restricts cleartext traffic
- [ ] No sensitive data is stored in plain text
- [ ] API endpoints use HTTPS
- [ ] Authentication is properly implemented
- [ ] Input validation is in place

## Automated Security

This project includes:

- ESLint security rules for static analysis
- Dependency vulnerability scanning via `yarn audit`
- Mobile platform security configurations

Run security checks:

```bash
# Check for dependency vulnerabilities
yarn audit --level moderate

# Run security linting
yarn lint

# Run tests to ensure security fixes don't break functionality
yarn test
```