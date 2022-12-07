# Onesky API Wrapper
Fully typed wrapper for the OneSky API for easy access and management of translation files.

The implementation follows the official documentation for the API, such that each controller description in the documentation has a corresponding class, that implements it. 

## Usage
```typescript
const fileApi = new FileApi({
  apiKey: '',
  secret: ''
});

// List files from OneSky:
const files = await fileApi.listFiles({projectId: 'someId', params: {}})

const projectApi = new ProjectApi({
  apiKey: '',
  secret: ''
});

// Create a new project:
projectApi.createProject({projectGroupId: 'someId', params: {}});

```

## Know issues
* Implementation of the upload file API.
* Queryparameters of type boolean are now handled as strings.
* Test
