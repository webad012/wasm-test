#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

Help()
{
    # Display Help
    echo "############################################################"
    echo "Help"
    echo "############################################################"

    echo "Usage: bash run.sh -b|-r|-s|-e"
    echo "-b     Build image"
    echo "-r     Run container"
    echo "-s     Start/Stop container"
    echo "-e     Enter container"
}

Build()
{
    echo "Build"
    docker build -t wasm-test $SCRIPT_DIR
}

Run()
{
    echo "Run"
    docker run -d -it --rm -p 8080:80 --name wasm-test wasm-test bash
}

StartStop()
{
    echo "Start/Stop"
    if [ "$(docker ps -aq -f status=exited -f name=wasm-test)" ]; then
        echo "Starting"
        docker start wasm-test
    else
        echo "Stopping"
        docker stop wasm-test
    fi
}

Enter()
{
    echo "Enter\n"
    docker exec -it wasm-test /bin/bash
}

############################################################
############################################################
# Main program                                             #
############################################################
############################################################
while getopts "hbdrsepclf:" option; do
    case $option in
        h)
            Help
            exit;;
        b)
            Build
            exit;;
        r)
            Run
            exit;;
        s)
            StartStop
            exit;;
        e)
            Enter
            exit;;
    \?) # Invalid option
        Help
        exit;;
    esac
done
Help