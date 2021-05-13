.PHONY: build_messi run_messi

build_messi:
	sudo docker-compose up --build  messi
run_messi:
	sudo docker-compose up messi 

clean_messi:
	sudo docker-compose down --v
	sudo docker-compose up messi 