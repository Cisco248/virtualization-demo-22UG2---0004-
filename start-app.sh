#!/bin/bash
echo "Running app ..."
docker-compose up -d
echo "The app is available at http://localhost:5000"

docker-compose logs