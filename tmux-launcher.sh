#! /bin/bash

cd "${1:-.}"
tmux new-session -d -s dev -n code
tmux send-keys -t dev 'vim .' C-m
tmux split-window -h -t dev
tmux send-keys -t dev 'claude' C-m
tmux select-pane -t dev:0.0
tmux attach -t dev
