#!/bin/bash

if ! [[ -n "$1" ]]; then
	echo "no argument"
elif ! [[ -n "$2" ]]; then
	echo $1
elif ! [[ -n "$3" ]]; then
	echo $1
	echo $2
else
	echo $1
	echo $2
	echo $3
fi

