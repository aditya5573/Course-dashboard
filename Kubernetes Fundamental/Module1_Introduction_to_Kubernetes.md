# Module: Introduction to Kubernetes

## 1. What is Kubernetes?

Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Initially developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF), Kubernetes allows developers and system administrators to manage services and workloads across a cluster of machines, offering high availability and scalability.

### Key Features of Kubernetes:

- **Container Orchestration**: Manages the deployment, scaling, and operation of application containers across clusters.
  
- **Load Balancing and Service Discovery**: Automatically distributes network traffic and makes it easy to expose services to the outside world.

- **Self-Healing**: Restarts or replaces failing containers, reschedules them on available nodes, and kills those that don’t respond to your user-defined health checks.

- **Automated Rollouts and Rollbacks**: Gradually rolls out changes to your application or its configuration and automatically rolls back changes if necessary.

- **Storage Orchestration**: Automatically mounts storage systems such as local storage, public cloud providers, and network storage.

### Use Cases of Kubernetes:

Kubernetes is widely used in various scenarios, including:

- **Microservices**: Facilitating the development and deployment of applications based on microservices architecture.
  
- **CI/CD**: Implementing Continuous Integration and Continuous Deployment pipelines for faster and more reliable application updates.

- **Multi-cloud and Hybrid Cloud Strategies**: Running applications consistently across multiple environments.

## 2. Core Concepts

Understanding Kubernetes requires familiarizing yourself with several core concepts. Here are the essential components:

### 2.1 Pods

- **Definition**: The smallest deployable units in Kubernetes, a pod is a group of one or more containers with shared storage/network resources and a specification on how to run the containers.

### 2.2 Nodes

- **Definition**: A node is a worker machine in Kubernetes, which can be a virtual or physical machine. Each node runs at least one container runtime (like Docker) and has the necessary services to communicate with the Kubernetes control plane.

### 2.3 Cluster

- **Definition**: A set of nodes that run containerized applications managed by Kubernetes. A cluster typically consists of a master node that controls the cluster and multiple worker nodes.

### 2.4 Services

- **Definition**: An abstraction that defines a logical set of pods and a policy for accessing them. Services ensure that communication between microservices can happen seamlessly, regardless of the pod's IP address.

### 2.5 Deployment

- **Definition**: A higher-level abstraction that manages the desired state of pods. It allows you to declaratively create and manage replicas of applications.

### 2.6 ConfigMaps and Secrets

- **ConfigMaps**: Allow the separation of configuration settings from application code, making it easier to manage application settings.
  
- **Secrets**: Similar to ConfigMaps but specifically designed to hold sensitive information, such as passwords and tokens.

### 2.7 Namespaces

- **Definition**: A way to divide cluster resources between multiple users. Namespaces are useful for isolating environments (like production, staging, and development) within the same cluster.

## 3. Setting Up Kubernetes

Setting up a Kubernetes cluster can vary based on the environment (cloud, on-premises, development), but the following steps provide a general guide.

### 3.1 Prerequisites

- **Hardware Requirements**: A minimum of two nodes (one master and one worker), though three nodes are recommended for high availability.

- **Software Requirements**:
  - A supported operating system (e.g., Ubuntu, CentOS).
  - Container runtime (Docker, containerd, etc.).
  - Kubernetes packages (kubeadm, kubectl, kubelet).

### 3.2 Installation Steps

#### Step 1: Install a Container Runtime

- Install Docker or an alternative container runtime on all nodes:

```
sudo apt-get update
sudo apt-get install -y docker.io
```

#### Step 2: Install Kubernetes Packages

- Install kubeadm, kubecontrol, and kubelet using:

```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

#### Step 3: Initialize the Master Node

- Run this command on the master node to initialize the cluster:

```
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
```
- Follow instructions at the end of this command to set up kubectl access.

#### Step 4: Install Pod Network Add-on

- A network add-on is necessary for communication between the nodes. For example, using Flannel:

```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/k8s-manifests/kube-flannel.yml
```

#### Step 5: Join Worker Nodes

- On each worker node, use the command provided at the end of the kubeadm init output to join the cluster. It will look something like this:

```
kubeadm join <master-node-ip>:6443 --token <token> --discovery-token-ca-cert-hash sha256:<hash>
```

### 3.3 Verifying Cluster Installation

- Check the status of the nodes:

```
kubectl get nodes
```

- The output should show all nodes in Ready status.

### 3.4 Accessing the Kubernetes Dashboard

- Optionally, you can deploy the Kubernetes dashboard for a visual management experience.

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
```

- To access the dashboard, retrieve the admin user's token and open the dashboard service URL (adjust for your installation).
