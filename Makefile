.PHONY: setup test lint clean

setup:
	bash scripts/setup.sh

test:
	python tests/smoke_test.py

lint:
	python -m compileall -q src

clean:
	rm -rf out .cache
