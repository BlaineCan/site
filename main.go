package main

import (
  "fmt"
  "net/http"
)

func main() {
  http.Handle("/", http.FileServer(http.Dir("./frontend")))
  fmt.Println("Listening on PORT:8000. Please open your browser and visit localhost:8000.")
  http.ListenAndServe(":8000", nil)
}
