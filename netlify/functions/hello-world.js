export const handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World 5!',
      }),
    }
  }