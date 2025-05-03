export default function status(request, response) {
  const update_at = new Date().toISOString();

  response.status(200).json({
    update_at: update_at,
    database: {
      dependencies: {
        version: "16.8",
        max_connections: parseInt(100),
        opened_max_connections: 1,
      },
    },
  });
}
