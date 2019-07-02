package main

import (
  "fmt"
  "net/http"
)

func main() {
  http.Handle("/", http.FileServer(http.Dir("./frontend")))
  fmt.Println("Listening.. ")
  http.ListenAndServe(":8000", nil)
}
