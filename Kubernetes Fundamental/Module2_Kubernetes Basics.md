# Module: Kubernetes Basics

In this module, we will cover the fundamental components of Kubernetes, the structure and purpose of YAML configuration files, and the various Kubernetes objects you will encounter in the platform.

## 1. Cluster Components

The architecture of a Kubernetes cluster comprises several key components that work together to enable orchestration and management of containerized applications. Understanding these components is crucial for effective cluster management and troubleshooting.

### 1.1 Control Plane

The control plane is responsible for maintaining the desired state of the cluster, managing the scheduling of pods, and ensuring that desired applications are running as expected. The primary components of the control plane include:

- **Kubernetes API Server** (`kube-apiserver`): The API server is the central management entity that exposes the Kubernetes API. It acts as the gateway for all requests made to the control plane.

- **Etcd**: A distributed key-value store used to hold the cluster's configuration data and state. Etcd serves as the primary data store for all cluster resources.

- **Controller Manager** (`kube-controller-manager`): This component oversees various controllers that regulate the state of the cluster. Each controller is responsible for a specific task, such as managing host nodes or ensuring appropriate numbers of pod replicas are running.

- **Scheduler** (`kube-scheduler`): The scheduler is responsible for assigning newly created pods to nodes based on resource availability and other constraints. It selects the best node to run a pod using scheduling algorithms.

### 1.2 Node Components

Each worker node in the cluster contains the necessary components to support application execution:

- **Kubelet**: An agent that runs on each node and ensures that the containers are running in pods. It communicates with the Kubernetes API server to receive commands from the control plane.

- **Kube Proxy**: A network proxy that maintains network rules on nodes, allowing for communication between pods and services. It also functions as a load balancer for services.

- **Container Runtime**: The software responsible for running containers. Common container runtimes include Docker, containerd, and CRI-O.

## 2. Understanding YAML Configuration Files

YAML (YAML Ain't Markup Language) is a human-readable data serialization format that Kubernetes uses for its configuration files. These configuration files define the desired state of various Kubernetes resources.

### 2.1 Structure of YAML Files

A typical Kubernetes YAML file consists of the following sections:

- **apiVersion**: Specifies the API version of the resource. Kubernetes evolves, and this indicates which version of the API to use for that resource.

- **kind**: Defines the type of Kubernetes resource (e.g., Pod, Service, Deployment).

- **metadata**: Provides information about the resource, such as its name, namespace, and labels.

- **spec**: Contains the desired state of the resource, including configurations and settings.

### 2.2 Example YAML File

Here’s an example of a YAML file defining a simple Deployment:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app-container
        image: my-app-image:latest
        ports:
        - containerPort: 80
```

### 2.3 Applying YAML Files

To apply a YAML configuration file to your Kubernetes cluster, use kubectl, the Kubernetes command-line tool:

```
kubectl apply -f my-app-deployment.yaml
```

This command instructs Kubernetes to create or update the defined resources in your cluster according to the specifications in the YAML file.

## 3. Kubernetes Objects

Kubernetes objects are persistent entities in the Kubernetes system that represent the state of your cluster. Each object has certain properties and is used to describe the desired state of your application.

### 3.1 Pod

- **Definition**: The smallest and simplest object in Kubernetes, a Pod represents a single instance of a running process in your cluster. A Pod can hold one or more containers that share the same network namespace.

### 3.2 Service

- **Definition**: A Service is an abstraction that defines a logical set of Pods and a way to access them. Services enable stable communication between Pods, as they create a consistent endpoint (like a DNS name) for client applications to connect.

### 3.3 Deployment

- **Definition**: A Deployment is a higher-level abstraction that manages a set of replicas of Pods. It helps define the desired state for your application and facilitates automated scaling, updating, and rollback of applications.

### 3.4 ConfigMap

- **Definition**: A ConfigMap allows you to separate configuration settings from your Pod specifications. This enables you to modify application settings without altering the underlying application code, making deployments more flexible.

### 3.5 Secret

- **Definition**: Similar to ConfigMaps, Secrets are used to hold sensitive information, such as passwords and API keys. Secrets are stored in a way that they are base64 encoded and can be referenced in Pod specifications.

### 3.6 StatefulSet

- **Definition**: A StatefulSet is used to manage stateful applications. Unlike Deployments, StatefulSets provide guarantees on the ordering and uniqueness of pods, making them suitable for applications that require persistent storage.

### 3.7 Namespace

- **Definition**: Namespaces provide a way to divide cluster resources between multiple users. They are useful for isolating environments (production, development, testing) or projects within the same cluster.
