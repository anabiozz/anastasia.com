package main

import (
	"github.com/gorilla/mux"
	"net/http"
)

var Routes *mux.Router

func MainPage(w http.ResponseWriter, r *http.Request) {
	http.FileServer(http.Dir("../../../app"))
}

func Init() {
	Routes = mux.NewRouter()
	Routes.HandleFunc("/main", MainPage)
}

func main() {
	Init()
	http.Handle("/", http.FileServer(http.Dir("../../../app")))
	http.ListenAndServe(":8080", nil)
}
